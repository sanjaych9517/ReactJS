import React from 'react'
import Button from './Button'

const Header = () => {
    return (
        <div className="bg-red-300 py-5">
            <header className="max-w-
               [60rem] items-center flex justify-between text-xl text-black/80  mx-auto">

                <h1 className="text-3xl"><span className="font-extrabold text-[tomato]">B</span>rand</h1>

                <div className="flex gap-7">
                    <a href="">Features</a>
                    <a href="">Use Cases</a>
                    <a href="">Integrations</a>
                    <a href="">Portfolio</a>
                </div>

                <Button title="Join Us" />
            </header>
        </div>
    )
}

export default Header
