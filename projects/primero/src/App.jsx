import './App.css'
import { InstaFollowCard } from './InstaFollowCard'

export function App () {
    return (
        <section className='App'>
            <InstaFollowCard initialIsFollowing={true} >
                Pedro
            </InstaFollowCard>

            <InstaFollowCard >
                Daniel
            </InstaFollowCard>

            <InstaFollowCard >
                Messi
            </InstaFollowCard>  
        </section>
    )
}

