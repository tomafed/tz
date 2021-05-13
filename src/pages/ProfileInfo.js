import React, { memo } from 'react';
import st from 'styled-components';
import Container from '../components/Container';

export const ProfileInfo = memo(({
    userData,
}) => {
    const {
        address,
        phone,
        website,
        company,
        email,
    } = userData;

    let tags = company?.bs || '';
    tags = tags.split(' ');

    return(
        <Content>
            <Container>
                <InfoBlock>
                    <DataBlock>
                        <Data>
                            <Strong>email:</Strong> {email}
                        </Data>
                        <Data>
                            <Strong>phone:</Strong> {phone}
                        </Data>
                        <Data>
                            <Strong>city:</Strong> {address?.city}
                        </Data>
                        <Data>
                            <Strong>company:</Strong> {company?.name}
                        </Data>
                        <Data>
                            <Strong>website:</Strong> {website}
                        </Data>
                        <TagsBlock>
                            {tags.map((tagValue) => (
                                <Tag key={tagValue}>
                                    {tagValue}
                                </Tag>
                            ))}
                        </TagsBlock>
                    </DataBlock>
                </InfoBlock>

            </Container>
        </Content>
    )
});

const Content = st.div``;

const InfoBlock = st.div`
    text-align: center;
`;

const DataBlock = st.div``;

const Data = st.div`
    margin: 0 0 15px 0;
`;

const Strong = st.strong`
    color: ${({theme}) => theme.color.secondary.main};
`;

const TagsBlock = st.div``;

const Tag = st.div`
    background: ${({theme}) => theme.color.secondary.main};
    color: ${({theme}) => theme.color.primary.light};
    border-radius: 10px;
    padding: 2px 5px;
    box-sizing: border-box;
    display: inline-flex;
    margin: 0 5px 0 5px;
`;
