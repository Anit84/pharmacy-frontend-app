import React, {useState} from 'react';
import ProfileNav from './ProfileNav'
import ProfileInfo from './ProfileInfo'
import ProfileAddress from './ProfileAddress'
import UpdateProfile from './UpdateProfile'

const Profile = () => {
    const [selectedPage, setSelectedPage] = useState('My Profile')
    const handlePageChange = (selNav)=>{
            setSelectedPage(selNav)
    }
    return (
        <div class="row mt-5 bg-light p-4">
            <div className="col-4">
                <ProfileNav handlePageChange={handlePageChange}/>
            </div>
            <div className="col-8" style={{maxHeight:'35rem',overflow:'auto' }}>
                {selectedPage === 'My Profile' && <ProfileInfo/>}
                {selectedPage === 'My Address' && <ProfileAddress/>}
                {selectedPage === 'Update Profile' && <UpdateProfile/>}
            </div>
            
        </div>
    );
};



export default Profile;
