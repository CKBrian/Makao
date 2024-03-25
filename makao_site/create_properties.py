import django
import os

# Manually set up Django settings module
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'makao_site.settings')
django.setup()

import json
from properties.models import Property, Place
from uuid import UUID

# Read data from JSON file
with open("dummy_properties.json", "r") as file:
    properties_data = json.load(file)

# Iterate over each property data entry and create Property objects
for property_data in properties_data:
    # Convert UUID strings to UUID objects
    owner_id = UUID(property_data['owner_id'])
    place_id = UUID(property_data['place_id'])
    amenity_ids = [UUID(amenity_id) for amenity_id in property_data['amenities']]
    
    # Remove amenities from property_data
    property_data.pop('amenities')
    property_data.pop('owner_id')
    property_data.pop('place_id')

    place = Place.objects.get(id=place_id)

    # Create Property object
    property_obj = Property.objects.create(owner_id=owner_id, place_id=place, **property_data)

    # Add amenities to the property
    property_obj.amenities.add(*amenity_ids)

print("Property objects created successfully!")
