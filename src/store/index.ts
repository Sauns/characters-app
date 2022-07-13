import create from 'zustand'
import { fetchCharacters } from '../api/Characters'

export interface Character {
    name: string
    birth_year: string
    eye_color: string
    mass: string
    skin_color: string
    url: string
    gender: string
}

export interface StoreState {
    characters: {
        data: Character[] | []
        total: number
        isLoading: boolean
        error: string | null
    }
    fetchCharacters: ({
        page,
        search,
    }: {
        page: number
        search?: string
    }) => void
}

export const useStore = create<StoreState>((set, get) => ({
    characters: {
        total: 0,
        isLoading: false,
        error: null,
        data: [],
    },
    fetchCharacters: async ({
        page,
        search,
    }: {
        page: number
        search?: string
    }) => {
        set({
            characters: {
                ...get().characters,
                isLoading: true,
            },
        })

        try {
            const { results, count } = await fetchCharacters({ page, search })

            set({
                characters: {
                    isLoading: false,
                    total: count,
                    data: results,
                    error: null,
                },
            })
        } catch ({ message }) {
            set({
                characters: {
                    ...get().characters,
                    isLoading: false,
                    error: message as string,
                },
            })
        }
    },
}))
