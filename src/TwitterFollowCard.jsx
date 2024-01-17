import { useState } from 'react'

export function TwitterFollowCard({ userName, name, initialIsFollowing}) {

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  //console.log('[TwitterFollowCard] render with isFollowing: ', isFollowing)
  //console.log(isFollowing)
    return (
      <article className='tw-followCard'>
        <header className='tw-followCard-header'>
          <img
            className='tw-followCard-avatar'
            alt="El avatar de midudev"
            src={`https://unavatar.io/${userName}`} />
          <div className='tw-followCard-info'>
            <strong>{name}</strong>
            <span className='tw-followCard-infoUserName'>@{userName}</span>
          </div>
        </header>
        
        <aside>
          <button className={buttonClassName} onClick={handleClick}>
            <span className='tw-followCard-text'>{text}</span>
            <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
          </button>
        </aside>
      </article>
    )
}

/*
Para hacerlo conchildren habría que añadir "children" como prop a TwitterFollowCard
y sustituir "{name}" por "{children}" dentro del div className='tw-followCard-info'

Para poner algo como default se hace igua lque en JavaScript, por ejemplo
para poner user name como default "unknown" sería así: " username='unknown' "
*/

/*
Para establecer el isFollowing desde un prop simplemente hay que añadir el isFollowing como prop a TwitterFollowCard
y quitar "const [isFollowing, setIsFollowing] = useState(false)"
*/