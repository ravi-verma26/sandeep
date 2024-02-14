import React,{useState} from 'react';

const ContactUs = () => {
    const generations = ['Gen Z', 'Millennials', 'Gen X', 'Baby Boomers'];
    const [selectedGeneration, setSelectedGeneration] = useState('');
 
    return (
        <div >
            <section className='contact_us_section '>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="contact_text text-center mb-5">
                                <h2 className="main_heading">Contact us</h2>
                            </div>
                        </div>

                    </div>
                    <form className="mb-3 row justify-content-center">
                        <div className="col-12 col-lg-4 pt-3">
                            <div className="">
                                <input type="text" className="form-control shadow-none" id="exampleInputEmail1" aria-describedby="textHelp" placeholder='Full Name' />
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 pt-3">
                            <div className="">
                                <input type="email" className="form-control shadow-none" id="exampleInputEmail1" aria-describedby="textHelp" placeholder='Email address' />
                            </div>
                        </div>
                    </form>
                    <form className="mb-3 row justify-content-center">
                        <div className="col-12 col-lg-4 pt-3">
                            <div className="">
                                <input type="text" className="form-control shadow-none" id="exampleInputEmail1" aria-describedby="textHelp" placeholder='Your Number' />
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 pt-3">
                            <div className="">
                                <select value={selectedGeneration} className="form-control shadow-none" onChange={(e)=>setSelectedGeneration(e.target.value)}>
                                    <option value="">Select Generation</option>
                                    {generations.map((generation, index) => (
                                        <option key={index} value={generation}>
                                            {generation}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </form>
                    <form className="mb-3 row justify-content-center">
                        <div className="col-12 col-lg-8 pt-3">
                            <div className="">
                                <textarea className="form-control shadow-none" id="exampleFormControlTextarea1" placeholder='Tell us your project...' rows="5"></textarea>
                            </div>
                        </div>
                    </form>
                    <form className="mb-3 row justify-content-center">
                        <div className="col-12 col-lg-8 pt-3">
                            <div className='text-end'>
                            <button type="button" className="from_submit_button buisness_button shadow-none rounded-2">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};


export default ContactUs;
