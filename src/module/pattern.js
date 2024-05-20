import React, { useState } from 'react';

export default function Pattern() {
    const [rows, setRows] = useState(5);
    const [pattern, setPattern] = useState([]);
    const [maxNumber, setMaxNumber] = useState(0);

    const generatePattern = () => {
        let newPattern = [];
        const commonNo = new Set();
        let maxNum = 0;

        for (let i = 1; i <= rows; i++) {
            let uniqueNumbers = new Set();

            while (uniqueNumbers.size < i) {
                const num = Math.floor(Math.random() * 100);

                if (!commonNo.has(num)) {
                    uniqueNumbers.add(num);
                    commonNo.add(num);
                    maxNum = Math.max(maxNum, num);
                    
                }
            }
            let str = Array.from(uniqueNumbers).join(' ');
            newPattern.push([str]);
        }
        setPattern(newPattern);
        setMaxNumber(maxNum);
        console.log(commonNo);
    };

    return (
        <div>
            <button onClick={generatePattern}>Generate Pattern</button>
            <ul>
                {pattern.map((row, index) => (
                    <li key={index}>{row}</li>
                ))}
            </ul>
            <p>Maximum number: {maxNumber}</p>
        </div>
    );
}