import React from 'react'
// import Refs from './component/Refs'
// import Portal from './component/Portal'
// import Hero from './component/Hero'
// import ErrorB from './component/ErrorB'
import ComponentC from './component/ComponentC'
import {UserProvider} from './component/userContext'


export default function App() {
  return (
    <div>
    {/* <Refs/> */}
    {/* <Portal/> */}
    {/* <ErrorB>
    <Hero  heroName= 'batman'/>
    </ErrorB> 
    <ErrorB>
    <Hero  heroName= 'superman'/>

</ErrorB>  
<ErrorB>
    <Hero  heroName= 'joker'/> 
    </ErrorB>   
    </div> */}

<UserProvider value='ashish'>
     <ComponentC/>
     </UserProvider>
</div>
  )
}
