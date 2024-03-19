import React, { useState } from 'react'
import axiosInstance from '../../axios';
import { useNavigate } from 'react-router-dom';
import PropertyType from './PropertyForms/PropClass';
import PropertyDesc from './PropertyForms/PropDesc';
import PropertyCost from './PropertyForms/PropCost';
import PropertyImages from './PropertyForms/PropImg';
import PropertyLocation from './PropertyForms/PropLocation';
import PropertyConfirm from './PropertyForms/PropConfirm';

function NewProperty() {
    const [formData, setformData] = useState({
        amenities: []
    });
    const [step, setStep] = useState(1);
    const [createdProperty, setCreatedProperty] = useState({});
    const navigate =useNavigate()

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrev = () => {
        setStep(step - 1);
    };

    const handleCreateProperty = async () => {
        try {
            await axiosInstance.post('properties/property-create/', formData)
            .then(response => {
                if (response.status === 201) {
                    setCreatedProperty(response.data);
                    console.log(response.data);
                    navigate('/listings');
                } else {
                    return;
                }
            })
        } catch (error) {
            console.log('Failed To create Property')
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setformData((prevValues) => ({
            ...prevValues,
            [name] : value
        }));
    };
  return (
    <div>
        {step === 1 &&
            <PropertyType formData={formData} onNext={handleNext} onChange={handleInputChange} />
        }
        {step === 2 &&
            <PropertyDesc formData={formData} onNext={handleNext} onChange={handleInputChange} onPrev={handlePrev}/>
        }
        {step === 3 &&
            <PropertyCost formData={formData} onNext={handleNext} onChange={handleInputChange} onPrev={handlePrev}/>
        }
        {step === 4 &&
            <PropertyImages formData={formData} onNext={handleNext} onChange={handleInputChange} onPrev={handlePrev}/>
        }
        {step === 5 && 
            <PropertyLocation formData={formData} onNext={handleNext} onChange={handleInputChange} onPrev={handlePrev}/>
        }
        {step === 6 &&
            <PropertyConfirm formData={formData} onNext={handleCreateProperty} onChange={handleInputChange} onPrev={handlePrev}/>
        }
    </div>
  )
}

export default NewProperty