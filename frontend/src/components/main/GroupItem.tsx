import styled from "styled-components";
import { GroupData } from "../../types/main";
import { getImagePath } from "../../util/common";
import { useNavigate } from "react-router";
interface ImageWrapperProps {
  imageUrl: string;
}

interface IProps {
  group: GroupData;
}

export default function GroupItem({ group }: IProps) {
  console.log(group);
  const navigate = useNavigate();
  return (
    <BoxWrapper onClick={() => navigate(`groups/${group.groupId}`)}>
      {/* {group.type === "personal" ? (
        <ImageWrapper imageUrl={getImagePath(group.imagePath)}>
          <span>
            {group.name}님의 <br />
            개인 챌린지
          </span>
        </ImageWrapper>
      ) : ( */}
      <ImageWrapper imageUrl={getImagePath(group.imagePath)}>
        <span>
          {group.name}의 <br />
          그룹 챌린지
        </span>
      </ImageWrapper>
      {/* )} */}
      <ChallengeWrapper>
        {group.badges.map((b) => {
          return <ChallengeBox src={getImagePath(b)} />;
        })}
      </ChallengeWrapper>
    </BoxWrapper>
  );
}

const ImageWrapper = styled.div<ImageWrapperProps>`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%; /* 이미지 비율을 1:1로 유지 */
  /* background-image: url(${(props) => props.imageUrl}); */
  /* background-size: cover; 이미지를 부모 요소 크기에 맞춤 */
  /* background-repeat: no-repeat; */
  background-color: lightgray;
  border-radius: 15px;
  span {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-bottom: 2rem;
    font-size: 2.4rem;
    font-weight: bold;
    padding: 1rem 2rem;
    color: white;
  }
`;
const BoxWrapper = styled.div`
  width: 35rem !important;
  border-radius: 15px;
  margin: 0 auto !important;
  cursor: pointer;
`;

const ChallengeWrapper = styled.div`
  margin-top: 0.3rem;
  display: flex;
  justify-content: space-between;
`;
const ChallengeBox = styled.img`
  width: 30%;
  cursor: pointer;
  border-radius: 10px;
`;
