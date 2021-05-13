import React, {
	useState,
	useEffect,
} from 'react';
import st from 'styled-components';
import {
    Link,
    useParams,
} from 'react-router-dom';
import Container from '../components/Container';

const Album = () => {
    const { albumId } = useParams();
    const [photos, setPhodos] = useState([]);
    const [album, setAlbum] = useState({});
    const [selectPhotoKey, setSelectPhotoKey] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/album/${albumId}/photos`)
        .then(response => response.json())
        .then(json => setPhodos(json))
        
        fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
        .then(response => response.json())
        .then(json => setAlbum(json))
    }, [albumId]);

	const selectImge = photos[selectPhotoKey] || null;

    return(
        <>
			{selectImge && (
				<SelectImageBox>
					<SelectImageContent>
						{selectPhotoKey !== 0 && (
							<SelectImageButton onClick={() => setSelectPhotoKey(selectPhotoKey - 1)}>
								Prev image
							</SelectImageButton>
						)}
						<SelectImage src={selectImge.url} />
						{selectPhotoKey !== photos.length - 1 && (
							<SelectImageButton onClick={() => setSelectPhotoKey(selectPhotoKey + 1)}>
								Next image
							</SelectImageButton>
						)}
					</SelectImageContent>
					<CloceButton onClick={() => setSelectPhotoKey(null)}>
						X
					</CloceButton>
				</SelectImageBox>
			)}
            <Content>
                <Container>
                    <Title>
                        {album.title}
                    </Title>
                    <NavigationBlock>
                        <Link to="/albums">Albums</Link> {'>'} Quibusdam autem aliquid et et quia
                    </NavigationBlock>
					<PhotosCount>
						Count: {photos.length}
					</PhotosCount>
                    <PhotoBlock>
                        {photos.map(({id, thumbnailUrl, title}, key) => (
							<PhotoContent key={id} onClick={() => setSelectPhotoKey(key)} >
								<Photo src={thumbnailUrl} />
								<PhotoTitle>
									{title}
								</PhotoTitle>
							</PhotoContent>
						))}
                    </PhotoBlock>
                </Container>
            </Content>
        </>
    )
};

const Content = st.div``;

const CloceButton = st.div`
	cursor: pointer;
	position: absolute;
    top: 0;
    right: 0;
    padding: 25px;
    background: #00000045;

	&:hover {
		color: ${({theme}) => theme.color.white};
		background: ${({theme}) => theme.color.dark.main};
	}
`;

const SelectImageBox = st.div`
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.58);
	display: flex;
    align-items: center;
    justify-content: center;
`;

const SelectImageContent = st.div`
	display: flex;
	align-items: center;
`;

const SelectImageButton = st.button``;

const SelectImage = st.img`
    max-width: 100%;
	max-height: 100%;
	margin: 0 20px;
`;

const Title = st.h2`
    margin: 20px 0 5px 0;
    font-size: 35px;
    line-height: 43px;
`;

const NavigationBlock = st.div`
    color: ${({theme}) => theme.color.secondary.main};
    font-size: 14px;
    line-height: 17px;
`;

const PhotosCount = st.div`
	margin: 10px 0 40px 0;
`;

const PhotoBlock = st.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const Photo = st.img`
    width: 100%;
`;

const PhotoTitle = st.h5`
    margin: 0;
    position: absolute;
    left:0;
    bottom:0;
    right:0;
    top:0;
    display:none;
    height: 100%;
    width: 100%;
    align-items: center;
    text-align: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.58);
    color: ${({theme}) => theme.color.white};
`;

const PhotoContent = st.div`
    position:relative; 
    cursor: pointer;
    height: 240px;

    &:hover {
        & h5 {
            display: flex;
        }
    }
`;

export default Album;
