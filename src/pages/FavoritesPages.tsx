import { useAppSelector } from "../hooks/redux"

export function FavoritesPages() {

    const {favourites} = useAppSelector(state => state.github)

    if(favourites.length === 0 ) return <p className="text-center">No items.</p>

    return (
       <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>

        <ul className="list-none">
                {favourites.map(f => (
                    <li key={f}>
                        <a target='_blank' href={f}>{f}</a>
                    </li>
                ))}
            </ul>
       </div>
    )
}