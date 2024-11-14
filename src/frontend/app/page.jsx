"use client"

import React, { useState } from 'react';
import axios from 'axios';
import { LoaderCircle } from 'lucide-react';

export default function Home() {
    const [cpf, setCpf] = useState('');
    const [isValid, setIsValid] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleCpfChange = (e) => {
        setCpf(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const response = await axios.post('http://localhost:5000/api/validate-cpf', { cpf });
            setIsValid(response.data.isValid);
            setLoading(false);
        } catch (error) {
            console.error('Error validating CPF', error);
            setIsValid(null);
            setLoading(false);
        }
    };

    return (
        <div className={"h-full w-full mt-48 flex justify-center items-center"}>
          <div className={"w-[30%] h-48 p-10 bg-white rounded border"}>
            <div className={"w-full flex justify-center items-center"}>
              <h1 className={"text-black"}>CPF Validator</h1>
            </div>
            <div className={"text-zinc-500 flex items-center justify-center"}>
                <span>Enter a CPF and verify if it's valid</span>
            </div>
            <div className={"flex mt-4 items-center justify-center"}>
                <form onSubmit={handleSubmit}>
                    <input
                        className={"p-1 text-black border border-black rounded"}
                        type="text"
                        value={cpf}
                        onChange={handleCpfChange}
                        placeholder="Enter CPF"
                        style={{ fontSize: '15px' }}
                    />
                    <button type="submit" disabled={loading} style={{ fontSize: '16px' }} className={`" p-1 text-black bg-slate-400 rounded ml-3 "  ${loading ? "cursor-disabled" : "cursor-pointer"}`}>
                        Validate
                    </button>
                </form>
            </div>
            <div className={"w-full flex items-center justify-center mt-4"}>
                {loading && (
                    <LoaderCircle className="animate-spin" />
                )}
                {isValid !== null && (
                    isValid ? (
                        <span className={"text-green-500"}>Valid</span>
                    ) : (
                        <span className={"text-red-500"}>Invalid</span>
                    )
                )}
            </div>
          </div>
        </div>
    );
}