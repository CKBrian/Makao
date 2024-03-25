import json
from faker import Faker
import random

fake = Faker()

# Generate dummy data for Property
def generate_property_data():
    property_data = {
        "name": fake.company(),
        "owner_id": random.choice(["fb1ae6fe-c4f1-45f4-8f8c-d12ac379dff7", "66745d3a-27a6-485a-93dc-23ba6569c0a7", "2e33bf52-e658-46bb-8860-49cf43ad3f69"]),
        "property_type": random.choice(["Apartment", "House", "Condo"]),
        "description": fake.text(),
        "number_rooms": random.randint(1, 5),
        "rent_price": random.randint(5000, 20000),
        "location": fake.address(),
        "place_id": "06ded36e-0fbb-48c0-b5b1-f34865d9f991",  
        "amenities": ["09116fc8-f1a3-4b37-8406-d12de2e26075", "8148ca66-436b-4f3b-8bc9-7b4263976e0f"]
    }
    return property_data

# Create dummy data for 20 properties
properties = []
for _ in range(20):
    property_data = generate_property_data()
    properties.append(property_data)

# Write data to JSON file
with open("dummy_properties.json", "w") as json_file:
    json.dump(properties, json_file, indent=4)

print("JSON file with dummy data generated successfully!")
