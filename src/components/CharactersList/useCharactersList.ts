import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import { Character, useStore } from '../../store'

interface Output {
    page: number
    setPage: Dispatch<SetStateAction<number>>
    onSearch: (search: string) => void
    error: string | null
    isLoading: boolean
    total: number
    data: Character[] | []
    fetchCharacters: ({
        page,
        search,
    }: {
        page: number
        search?: string | undefined
    }) => void
}

const useCharactersList = (): Output => {
    const {
        fetchCharacters,
        characters: { total, isLoading, error, data },
    } = useStore()

    const [page, setPage] = useState<number>(1)

    const onSearch = (search: string) => {
        fetchCharacters({ page, search })
    }

    useEffect(() => {
        fetchCharacters({ page })
    }, [])

    return {
        page,
        setPage,
        onSearch,
        error,
        isLoading,
        total,
        data,
        fetchCharacters,
    }
}

export default useCharactersList
