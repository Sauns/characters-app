import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { fetchDetailCharacter } from '../../api/Characters'
import type { Character } from '../../store'

interface Output {
    error: string | null
    isLoader: boolean
    character: Character | null
}

const useCharacterDetail = (): Output => {
    const { id } = useParams<{ id: string }>()
    const [character, setCharacter] = useState<Character | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [isLoader, setIsLoader] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                setIsLoader(true)
                const response = await fetchDetailCharacter(id)

                setCharacter(response)
                setIsLoader(false)
            }
        }

        fetchData().catch(setError)
    }, [])

    return { error, isLoader, character }
}

export default useCharacterDetail
