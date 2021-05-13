import React, {
    useEffect,
    useState,
    memo,
} from 'react';
import {Link} from 'react-router-dom';
import st from 'styled-components';

const Albums = memo(({
    userData,
}) => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userData.id}/albums`)
        .then(response => response.json())
        .then(json => setAlbums(json))
    }, [userData.id]);

    return(
        <Content>
            <AlbumListBlock>
                {albums.map(({
                    id,
                    title,
                }) => (
                    <NameAlbum key={title}>
                        <NameAlbumLink to={`/album/${id}`}>
                            {title}
                        </NameAlbumLink>
                    </NameAlbum>
                ))}
            </AlbumListBlock>
        </Content>
    )
});

const Content = st.div`
    width: 469px;
    margin: 0 auto;
`;

const AlbumListBlock = st.ol`
    display: grid;
`;

const NameAlbum = st.li`
	margin: 0 0 15px 0;
	font-size: 24px;
`;

const NameAlbumLink = st(Link)`
    color: ${({theme}) => theme.color.dark.main};
    text-decoration: none;
    transition: all 0.1s;
    &:hover {
        opacity: 0.6;
    }
`;

export default Albums;
