import React, { Component } from 'react';
import Navber from '../Navber/Navber';
import { MDBContainer } from 'mdbreact';

import './About.css';
import Homeimage from '../Homeimage';
import Footer from '../Footer';

class About extends Component {

    render() {
        return (
            <div className="bg-dark">
                <Navber />
                <Homeimage />
                <br />

                <br />

                <h1 className="head text-white" align="center"> About Us </h1>
                <br />
                <br />


                <MDBContainer>
                    <blockquote className="blockquote">
                        <p className="text-white">
                            The Life Matter's Hospital Ltd is Eastern India's leading private healthcare provider, with three super specialty hospitals in Kolkata's Dhakuria, Mukundapur, and Salt Lake neighbourhoods, as well as a state-of-the-art daycare centre on Southern Avenue and another super specialty hospital in Bhubaneswar, Odisha. With a roster of more than 5,000 healthcare experts, the Group cares for about 3.5 lakh patients yearly and performs more than 15,000 successful procedures. More than 600 doctors and a well-trained nursing staff work diligently across more than 1,000 beds in four hospitals, aided by modern technology and cutting-edge equipment, to heal patients and save lives. The Lifescape Hospital Group is on its way to a steady growth path, with substantial changes and improvements on the horizon. In the foreseeable future, LifeScape Hospitals Ltd plans to build roughly 700 beds.
                            The Life Matters healthcare organisation is in a class of its own, making it a key role in keeping Eastern India ahead of the curve. Every year, the Group serves over 3.5 lakh individuals and performs about 15,000 procedures, offering value-for-money treatments backed by modern equipment and cutting-edge technology. Landscape Hospitals is known for its dedicated staff of physicians and caregivers who are up to the task of treating the most difficult cases, as well as handling Emergency and Critical Care with devotion, knowledge, and compassion. The healthcare group has made significant contributions to the lives of people not just in Kolkata and Eastern India, but also throughout South Asia and the world, during the previous three decades.
                        </p>
                    </blockquote>


                </MDBContainer>

                <br>


                </br>
                <Footer />

            </div>
        );
    }
}

export default About;