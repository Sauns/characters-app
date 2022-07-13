import { Descriptions, Result, Spin } from 'antd'

import useCharacterDetail from './useCharacterDetail'

const CharacterDetail: React.FC = () => {
    const { error, isLoader, character } = useCharacterDetail()

    if (error) {
        return <Result status="error" title={error} />
    }

    if (isLoader) {
        return <Spin size="large" />
    }

    return character ? (
        <Descriptions title="Character Info" layout="vertical">
            <Descriptions.Item label="Name">{character.name}</Descriptions.Item>
            <Descriptions.Item label="Birth year">
                {character.gender}
            </Descriptions.Item>
            <Descriptions.Item label="Eye color">
                {character.eye_color}
            </Descriptions.Item>
            <Descriptions.Item label="Mass" span={2}>
                {character.mass}
            </Descriptions.Item>
            <Descriptions.Item label="Skin color">
                {character.skin_color}
            </Descriptions.Item>
            <Descriptions.Item label="Website">
                <a target="_blank" href={character.url}>
                    {character.url}
                </a>
            </Descriptions.Item>
        </Descriptions>
    ) : null
}

export default CharacterDetail
