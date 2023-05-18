import Loading from '../../../../components/Loading/Loading';
import { Character } from '../../../../types/Character';
import * as C from './components';

interface IProps {
    character: Character | null;
    isLoading: boolean;
};

const CharacterDetail = ({character, isLoading}: IProps) => {
    return (
        <>
            {isLoading && <Loading />}
            <C.Detail>
                <C.DetailImage src={character?.image} />
                <C.DetailList>
                    <C.DetailListItem>
                        <span>Status:</span> {character?.status}
                    </C.DetailListItem>
                    <C.DetailListItem>
                        <span>Gender:</span> {character?.gender}
                    </C.DetailListItem>
                    <C.DetailListItem>
                        <span>Species:</span> {character?.species}
                    </C.DetailListItem>
                    <C.DetailListItem>
                        <span>Location:</span> {character?.origin.name}
                    </C.DetailListItem>
                </C.DetailList>
            </C.Detail>
        </>
    );
};

export default CharacterDetail;
