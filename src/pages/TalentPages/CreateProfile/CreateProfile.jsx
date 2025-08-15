import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateProfileAside from '../../../Components/TalentComponents/CreateProfileAside/CreateProfileAside'
import CreateProfileCategory from '../../../Components/TalentComponents/CreateProfileCategory/CreateProfileCategory'
import CreateProfileEducationAndEmployment from '../../../Components/TalentComponents/CreateProfileEducationAndEmployment/CreateProfileEducationAndEmployment'
import CreateProfileExpertiseLevel from '../../../Components/TalentComponents/CreateProfileExpertiseLevel/CreateProfileExpertiseLevel'
import CreateProfileGetStart from '../../../Components/TalentComponents/CreateProfileGetStart/CreateProfileGetStart'
import CreateProfileHourlyRate from '../../../Components/TalentComponents/CreateProfileHourlyRate/CreateProfileHourlyRate'
import CreateProfileLanguage from '../../../Components/TalentComponents/CreateProfileLanguage/CreateProfileLanguage'
import CreateProfileLocation from '../../../Components/TalentComponents/CreateProfileLocation/CreateProfileLocation'
import CreateProfilePhoneNumber from '../../../Components/TalentComponents/CreateProfilePhoneNumber/CreateProfilePhoneNumber'
import CreateProfilePhoto from '../../../Components/TalentComponents/CreateProfilePhoto/CreateProfilePhoto'
import CreateProfileTitleAndOverview from '../../../Components/TalentComponents/CreateProfileTitleAndOverview/CreateProfileTitleAndOverview'
import { useLocation } from 'react-router-dom';
import CreateProfileSubmit from '../../../Components/TalentComponents/CreateProfileSubmit/CreateProfileSubmit'

export default function CreateProfile() {

    const { pathname } = useLocation();

    const [btns, setBtns] = useState({
        category: true,
        expertiseLevel: true,
        eduAndEmp: true,
        language: true,
        hourlyRate: true,
        titleAndOverview: true,
        profilePhoto: true,
        location: true,
        PhoneNumber: true,
    })

    return (
        <section className="p-4" style={{ backgroundColor: "#F1F2F4" }}>
            <div className="container">
                <div className="row">
                    {
                        pathname !== "/create-profile/submit" &&
                        <div className="col-lg-3">
                            <CreateProfileAside btns={btns} />
                        </div>
                    }
                    <div className={pathname === "/create-profile/submit" ? "col-lg-12" : "col-lg-9"}>
                        <Routes>
                            <Route path="/create-profile" element={<CreateProfileGetStart setBtns={setBtns} btns={btns} />} />
                            <Route path="/create-profile/category" element={<CreateProfileCategory setBtns={setBtns} btns={btns} />} />
                            <Route path="/create-profile/expertise-level" element={<CreateProfileExpertiseLevel setBtns={setBtns} btns={btns} />} />
                            <Route path="/create-profile/education-and-employment" element={<CreateProfileEducationAndEmployment setBtns={setBtns} btns={btns} />} />
                            <Route path="/create-profile/language" element={<CreateProfileLanguage setBtns={setBtns} btns={btns} />} />
                            <Route path="/create-profile/hourly-rate" element={<CreateProfileHourlyRate setBtns={setBtns} btns={btns} />} />
                            <Route path="/create-profile/title-and-overview" element={<CreateProfileTitleAndOverview setBtns={setBtns} btns={btns} />} />
                            <Route path="/create-profile/profile-photo" element={<CreateProfilePhoto setBtns={setBtns} btns={btns} />} />
                            <Route path="/create-profile/location" element={<CreateProfileLocation setBtns={setBtns} btns={btns} />} />
                            <Route path="/create-profile/phone-number" element={<CreateProfilePhoneNumber setBtns={setBtns} btns={btns} />} />
                            <Route path="/create-profile/submit" element={<CreateProfileSubmit />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </section>
    )
}
