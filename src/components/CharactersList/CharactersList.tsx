import { useEffect, useState } from 'react'
import { Input, List, Result, Skeleton } from 'antd'

import { useStore } from '../../store'
import { Link } from 'react-router-dom'
import useCharactersList from './useCharactersList'

const PAGE_SIZE = 10

const CharactersList: React.FC = () => {
    const {
        page,
        setPage,
        onSearch,
        error,
        isLoading,
        total,
        data,
        fetchCharacters,
    } = useCharactersList()

    const { Search } = Input

    if (error) {
        return (
            <Result
                status="error"
                title="Sorry, something went wrong. Please try again later"
            />
        )
    }

    return (
        <>
            <Search
                placeholder="input search text"
                allowClear
                onSearch={onSearch}
                style={{
                    width: 200,
                }}
            />
            <List
                className="characters-list"
                loading={{
                    size: 'large',
                    spinning: isLoading,
                }}
                itemLayout="horizontal"
                pagination={{
                    onChange: page => {
                        setPage(page)
                        fetchCharacters({ page })
                    },
                    pageSize: PAGE_SIZE,
                    total: total,
                    responsive: true,
                    showSizeChanger: false,
                    disabled: isLoading,
                }}
                dataSource={data}
                renderItem={({ name }, index) => (
                    <List.Item
                        actions={[
                            <Link
                                to={`/character/${
                                    PAGE_SIZE * page - (PAGE_SIZE - (index + 1))
                                }`}
                            >
                                More
                            </Link>,
                        ]}
                    >
                        <Skeleton avatar title={false} loading={false} active>
                            <List.Item.Meta
                                title={
                                    <Link
                                        to={`/character/${
                                            PAGE_SIZE * page -
                                            (PAGE_SIZE - (index + 1))
                                        }`}
                                    >
                                        {name}
                                    </Link>
                                }
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </Skeleton>
                    </List.Item>
                )}
            />
        </>
    )
}

export default CharactersList
