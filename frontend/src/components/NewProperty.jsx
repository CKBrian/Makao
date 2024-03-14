import React, { useState } from 'react';

function NewProperty() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});
    const [images, setImages] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        // Check if files are images and limit to a maximum of 5 images
        const allowedTypes = ['image/svg+xml', 'image/png', 'image/jpeg', 'image/gif'];
        if (files.length + images.length > 5) {
            alert('You can upload up to 5 images only.');
            return;
        }
        const newImages = files.filter(file => allowedTypes.includes(file.type));
        setImages([...images, ...newImages]);
    };

    const handleNextStep = () => {
        setStep(step + 1);
        console.log(step);
    };

    const handlePrevStep = () => {
        setStep(step - 1);
        console.log(step);
    };

    const handleSubmit = () => {
        // Handle form submission (e.g., send data to backend)
        console.log('Form data:', formData);
        console.log('Selected images:', images);
        // Reset form data and images
        setFormData({});
        setImages([]);
        // Reset step to the first step
        setStep(1);
    };

    return (
        <div className='fixed top-0 left-0 w-full h-full overflow-y-auto'>
            {step === 1 && (
                <div className='w-full h-full flex flex-col justify-center items-center'>
                    <h5 className="mb-5 text-lg font-medium">Select Property Type</h5>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                            <input
                                type="radio"
                                id="apartments"
                                name="property_type"
                                value="Apartments"
                                className="hidden peer"
                                onChange={handleInputChange}
                            />
                            <label
                                htmlFor="apartments"
                                className="inline-flex items-center justify-between w-full p-5 text-C2E8FF bg-transparent border border-C2E8FF rounded-lg cursor-pointer border-blue-200 peer-checked:border-blue-600 peer-checked:text-blue-600"
                            >
                                <div className="flex items-center">
                                    <div className="w-full text-lg font-semibold">Apartments</div>
                                </div>
                                <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="single-home"
                                name="property_type"
                                value="Single Home"
                                className="hidden peer"
                                onChange={handleInputChange}
                            />
                            <label
                                htmlFor="single-home"
                                className="inline-flex items-center justify-between w-full p-5 text-C2E8FF bg-transparent border border-C2E8FF rounded-lg cursor-pointer border-blue-200 peer-checked:border-blue-600 peer-checked:text-blue-600"
                            >
                                <div className="flex items-center">
                                    <div className="w-full text-lg font-semibold">Single Home</div>
                                </div>
                                <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </label>
                        </div>
                    </div>
                    <h5 className='mt-5'>Enter Your Property name</h5>
                    <div>
                        <input
                            name="name"
                            placeholder="Property name"
                            value={formData.name || ''}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-b-2 border-blue-900 focus:outline-none focus:border-blue-500 bg-0 my-5 text-gray-500"
                        />
                    </div>
                    <div className='flex justify-between px-8 bottom-0 flex-wrap border-gray-300 border-t-2 m-0'>
                        <button className="px-4 py-2 mr-2 text-blue-600 rounded-md">Cancel</button>
                        <button onClick={handleNextStep} className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Next</button>
                    </div>
                </div>
            )}
            {/* Remaining steps follow */}
            {step === 2 && (
                <div className='w-full h-full flex flex-col justify-center items-center'>
                    <h5>Set your Property Location</h5>
                    {/* Location input or selection */}
                    <div>
                        <button onClick={handlePrevStep} className="px-4 py-2 mr-2 text-blue-600 rounded-md focus:outline-none">Back</button>
                        <button onClick={handleNextStep} className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Next</button>
                    </div>
                </div>
            )}
            {step === 3 && (
                <div className='w-full h-full flex flex-col justify-center items-center'>
                <h5 className="mb-5 text-lg font-medium">Add some few Images that best describe your Property</h5>
                <div>
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-blue-300 p-5 border-dashed rounded-lg cursor-pointer bg-blue-800 dark:hover:bg-bray-800 hover:bg-blue-900">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p className="mb-2 text-sm"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                </div>
                <div className='w-full flex flex-wrap'>
                {images.map((image, index) => (
                    <img key={index} src={URL.createObjectURL(image)} alt={`Image ${index + 1}`} className='my-5' />
                ))}
                </div>
                <div className='my-5 p-5 w-full flex flex-wrap justify-between bottom-0 border-blue-200 border-t-2'>
                    <button onClick={handlePrevStep} className="px-4 py-2 mr-2 text-blue-600 rounded-md focus:outline-none">Back</button>
                    <button onClick={handleNextStep} className="px-4 py-2 text-white bg-blue-800 rounded-md hover:bg-blue-900 focus:outline-none focus:bg-blue-600">Next</button>
                </div>
            </div>            
            )}
            {step === 4 && (
                <div className='w-full h-full flex flex-col justify-center items-center'>
                    <h5>Write up a short and Catchy description for your Property</h5>
                    <textarea
                        name="description"
                        placeholder="Property description"
                        value={formData.description || ''}
                        onChange={handleInputChange}
                    />
                    <div>
                        <button onClick={handlePrevStep} className="px-4 py-2 mr-2 text-blue-600 rounded-md focus:outline-none">Back</button>
                        <button onClick={handleNextStep} className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Next</button>
                    </div>
                </div>
            )}
            {step === 5 && (
                <div className='w-full h-full flex flex-col justify-center items-center'>
                    <h5>Give us some little more details to finish up</h5>
                    <div>
                        <input
                            type="number"
                            name="rent_price"
                            placeholder="Price per month"
                            value={formData.rent_price || ''}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            name="number_rooms"
                            placeholder="Number of rooms"
                            value={formData.number_rooms || ''}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            name="number_bathrooms"
                            placeholder="Number of bathrooms"
                            value={formData.number_bathrooms || ''}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <button onClick={handlePrevStep} className="px-4 py-2 mr-2 text-blue-600 rounded-md focus:outline-none">Back</button>
                        <button onClick={handleNextStep} className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Next</button>
                    </div>
                </div>
            )}
            {step === 6 && (
                <div className='w-full h-full flex flex-col justify-center items-center'>
                    <h5>Confirm that these are your details</h5>
                    <div>
                        {/* Display key-value pairs of form data */}
                        {Object.entries(formData).map(([key, value]) => (
                            <p key={key}>{key}: {value}</p>
                        ))}
                    </div>
                    <h5>Selected Images</h5>
                    <div>
                        {images.map((image, index) => (
                            <img key={index} src={URL.createObjectURL(image)} alt={`Image ${index + 1}`} />
                        ))}
                    </div>
                    <div>
                        <button onClick={handlePrevStep}>Back</button>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NewProperty;
