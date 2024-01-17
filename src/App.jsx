import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
/*
Para pasar objetos como props sería, primero, establecer el objeto
  const midudev = { isFollowing:true, userName:'midudev' }

Y posteriormente el componente tendría que recogerlo
  <TwitterFollowCard {...midudev}>

Esto significa que le pasas las propiedades de dicho objeto como props

Esto no es del todo recomendable
*/

  const [name, setName] = useState('midudev')

  //console.log('render with name: ', name)

  const users = [
    {
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: true
    },
    {
      userName: 'pheralb',
      name: 'Pablo H.',
      isFollowing: false
    },
    {
      userName: 'PacoHdezs',
      name: 'Paco Hdez',
      isFollowing: true
    },
    {
      userName: 'TMChein',
      name: 'Tomas',
      isFollowing: false
    }
  ]

  return (
    <>
    
    <section className='App'>
      {
        users.map(user => {
          const { userName, name, isFollowing } = user
          return (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              name={name}
              initialIsFollowinb={isFollowing}
            />
          )
        })
      }
    </section>
      
    </>
  )
}

/*
Para hacerlo con children sería así por ejemplo
      <TwitterFollowCard 
        isFollowing={true} 
        userName="Midudev"
        >
        
        Miguel Ángel Durán

      </TwitterFollowCard>

*/

/*
Para establecer el isFollowing como prop sería así el componente:
      <TwitterFollowCard 
        isFollowing={true} 
        userName="Midudev" 
        name="Miguel Ángel Durán"
      />

      <TwitterFollowCard
        isFollowing={false}
        userName="pehralb"
        name="Pablo Hernandez"
      />
 
      <TwitterFollowCard
        isFollowing
        userName="elonmusk"
        name="Elon Musk"
      />

      <TwitterFollowCard
        userName="vxnder"
        name="Vanderhart"
      />
*/


/*
Este fragmento de codigo es de cuando tienes ciertos valores preestablecidos, ahora está puesto cuando obtienes un array
      <TwitterFollowCard
        initialIsFollowing={true}
        userName={name} 
        name="Miguel Ángel Durán"
      />

      {/*
        con esto se ve que solo se actualiza esta parte del DOM, este se renderiza de pare a hijo pero nunca de hijo a padre
      *//*} 

      <TwitterFollowCard
        initialIsFollowing={false}
        userName="pehralb"
        name="Pablo Hernandez"
      />
 
      <TwitterFollowCard
        initialIsFollowing
        userName="elonmusk"
        name="Elon Musk"
      />

      <TwitterFollowCard
        userName="vxnder"
        name="Vanderhart"
      />

      <button onClick={() => setName('pedromichel')}>
        Cambio nombre
      </button>
*/