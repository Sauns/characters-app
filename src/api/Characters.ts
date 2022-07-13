import axios from 'axios'

export const fetchCharacters = ({
    page,
    search = '',
}: {
    page: number
    search: string | undefined
}): Promise<any> => {
    return axios
        .get(`https://swapi.dev/api/people?page=${page}&search=${search}`)
        .then(response => response.data)
}

export const fetchDetailCharacter = (id: string): Promise<any> => {
    return axios
        .get(`https://swapi.dev/api/people/${id}`)
        .then(response => response.data)
}
