import React from 'react'
import { auth } from '../Utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header=()=> {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user)
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")

    });
  }
  return (
    <div className ="absolute px-8 w-screen py-2 bg-gradient-to-b from-black z-10 flex justify-between">
    <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"className ="w-44 z-10"/>
    {user && (<div className ="flex align-middle p-2 gap-2">
      <img className ="w-12 h-12 "alt ="usericon"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAyVBMVEX/rQD/////qwD///37qQD///v/qQD8///9rgD4pgD7pwD9/vj7uUb4qAD5rAD/pQD67M/57Mf2v1j6siv+/fP99+X9+fL457f51JP60479+OvzwU712JL63aL1w2HxqgD86sDyw1f7997xz3XwyW7z463wuj/2ti718sv3sh/1u0juszv4tzz1ynj8/ez1xG7716T00oX1yoH33q/erUjepTXWt2vMqFrftFvnuFfYtGLnqCTPoUXqsEPMoFDBnFvDjx7ZmiK6kUGt+NznAAAFq0lEQVR4nO3dDXeaOhgHcAkQIpQIAoNaedFZLRZ0lXXttm7d3ff/UDfB3tUX1msBY+/u8ztbz85WCX8JIeCTrtMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwpFT70ArCHnKcao4qMWWSQfrXZMqPYRRaxs9CGsO93RqdnVMWsqDzYuhb9t+GMWi02CzP0xsOwkjs9fC5gjSR5Yqy5IkyfL4fReL6myEINSNbJW3LMnGeNJr3s+ReSk9066moo4NCzPzNUn+1fYVbRoGpdZmFk3yIkVQHDTfbJoZXyuN0qA00dTNMLI07gsKk9nbWVjTzbqFGRg7W5SlwhGShobSLs2nDTaI+56k7qSR3Fxpa5x8AeoP9sJIg1ypv0UarsexbYkjYEQz9w8MeyOTuPYGEeu2FWEW8+MfGeSMq8J49U9YFHn7W2SWbe52NWWuVrU8WOmdmnGUvKLfMsMGPfdAKKps2Qh0VDuMW7VFLTx2NyNEydnIs9/DpQ963W0qq9+EaXbx+nc8jNZymN+dM++Pf6FR+hVJJMld1Q+zO6HgZEkVMAdAs8r30Ytw7S2mRVUYKxMQxvSrwliz+k1XDWeyNGw8fT0Amhj7WYygwTjK5pm7XZdN9+bHH5n5VTPZGgBkpmGfUPqetpPGXZlCJpoKG3020siqKrkTvUGXIGyTrrZ1cIyAirkFIJRdGFT5OYwmr8wm/ZtdHM2LRXmQpfXb5N6IOS48DJ1sj2gTvem5SnDsr5OwX5o10gU+0lCubflXL7+67jUedvhzpnkxfsd4/sisPczXahuZ00uvbLrodzFp/D4SBinddDqfxT3BT5pI+cQunU5TU2/nqRBZP+FBCNedrzbBHwPypv+Qh8MAAAAAAAAAAAAAAAAAAAAAgD8TKVeKCCjaFYGloI5Ttzzz7Vh/1O30Q7tYZSdoHyktfsrOwihxdFkWvfjXgo8NIeYsWvZTHbXUx3W6LDytLDuRBZXubzS+tDxvnJzPlDZqU3A8KXg9kFbWunlLofUuqHOxrh50rZu49zQM1cFfiPR4aQ82q87C2gWntcS/6t4N68bs1e5rpIN76dDaqav8YLa7ty/DI+O5dlAd39StHsI6HfmD7aJKVXJXra2kO0TvXN4shNQW4VTB6HWjG0K4Ow3H0m5FpaRexkKvnDgydmpUDTvPzEO7OuFVwM58WFFQLWnesMlioDriZGcfWLaFPzlz2MXnxQPE/5lSZz4JLfXpdVsbcf252LOfwZm1v1pEkxZ2sOxnlCfaLVxDJcV0zqI8tBf7h4THGtiTLhI+OUM4C3dL39enkerZRZCzSE5KFVPhdPabxk42Xy5XYWEt5L1DsjZI8hifZD0yopFftfCG76TqepZlF0UYBME5EwRhWCS25Q0qF4SsX+X5uSNqQeW2cmLoTPy9nZPVzSpl1TBcg3v+y6olYcw4jBwdnXD2j4hTzg23T+LKff298vuvVmfpK0f2Y+RJp0HFyfwqi8u+Q06eZH1XqKSTpGKtxWE0N8ln9G3cW5YzTIT09MZiV9EDO9g/HVGWXX8U6xgJW+N+GKR3ZzfW4F3lSsWKMLLxbmCFF2btVX9HhnrdlF3WvYHx8hAgGy67DwrzmdlDqHmt/NEgNgnOlkFRXlD2D5LqDjzL9sPVaEa7fOnEW38OgzA2aZpF+XlY8Mvkmm0nRfFheJ5HmUORLvrHWjTCEvEJDE2dLDvj2NQmpgpVMH7tfcLpkafbaLSN8DPkjfcsAAAAAAAAAAAAAAAAAAAAAAD4f9iojn7+SPq/+4ku6pTlTU+FG+yPiH8h4isdm0N0Tq/5/z+RmjwHoh16/fH2K8GEOkIL6ltBP93epRfp/P5zOp9l3758TT/ezh7Ovl18+fJN0I9cbQ/9/vnx/senhx8P9493dz/u/rq9/X5/9/jx58+Hn7f8G/4GAilcedsO7tkAAAAASUVORK5CYII="/>
    <button onClick ={handleSignOut}className='font-bold'>Sign Out</button>
    </div>)}
    </div>
  )
}

export default Header