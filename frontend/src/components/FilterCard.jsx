import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';


const filterData = [
    {
        filterType: "Location",
        array: ["UK", "India", "USA", "Germany", "Canada"]
    },
    {
        filterType: "Industry",
        array: ["Frontend Developer", "Backend Developer", "Fullstack Developer"]
    },
    {
        filterType: "Salary",
        array: ["0-2L", "2-3L", "3-4L", "4-5L", "5-6L", "6-7L", "7-8L", "8-9L", "9-10L", "10-15L", "15-20L", "20-30L"]
    },
];

const FilterCard = () => {
    return (
        <div className='w-full p-4 rounded-md bg-white border border-gray-200'>
            <h1 className='font-bold text-lg'>Filter Jobs</h1>
            <hr className='my-3' />
            {
                filterData.map((data) => {
                    return (
                        <div key={data.filterType} className="mb-5">
                            <h1 className='font-semibold text-base mb-2'>{data.filterType}</h1>
                            <RadioGroup>
                                {
                                    data.array.map((item) => {
                                        return (
                                            <div key={item} className='flex items-center space-x-2 my-2'>
                                                <RadioGroupItem value={item} id={`${data.filterType}-${item}`} />
                                                <Label htmlFor={`${data.filterType}-${item}`} className="font-normal">{item}</Label>
                                            </div>
                                        )
                                    })
                                } 
                            </RadioGroup>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default FilterCard;
