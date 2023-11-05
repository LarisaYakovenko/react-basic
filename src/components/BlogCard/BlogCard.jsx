import {dataForm} from '../../utils/dataFormat';

import {
  Card,
  CardBody,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  CardFooter,
  Tag,
  Avatar,
  UserBox,
  UserInfo,
  UserName,
  Date,
} from './BlogCard.styled';

export const BlogCard = ({
  poster,
  tag,
  title,
  description,
  userName,
  avatar,
  postedAt,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardPoster
          src={poster}
          alt={tag}
        />
      </CardHeader>
      <CardBody>
        <Tag>{tag}</Tag>
        <CardTitle>{title}</CardTitle>
        <CardText>
           {description}
        </CardText>
      </CardBody>
      <CardFooter>
        <UserBox>
          <Avatar src={avatar} alt={userName}/>
          <UserInfo>
            <UserName>{userName}</UserName>
            <Date>{dataForm(postedAt)}</Date>
          </UserInfo>
        </UserBox>
      </CardFooter>
    </Card>
  );
};
