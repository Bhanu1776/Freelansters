import React, {useEffect} from 'react'

const Profile = () => {

  const callProfilePage = async () => {
      try {
        const res = await fetch('/About', {
          method: "GET",                        //! IMP
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          credentials: "include"
        });

        const data = await res.json();
        console.log(data);

        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
      } catch (err) {
        console.log(err);
      }
    }

  useEffect(() => {
    callProfilePage();
  }, [])
  

  return (
    <>
    {/* //! Use Get Method in form while fetching data  */}
    <div style={{ color: "red" }} >Profile</div>
      <form method='GET'></form>
      </>
  )
}

export default Profile