import { useState, MouseEvent } from 'react';
import { FiChevronDown, FiX } from 'react-icons/fi';
import { AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { useOutsideClick } from '../../hooks/useOutsideClick';
// import { useAllSearchParams } from '../../hooks/useAllSearchParams';
import { useConcatSearchParams } from '../../hooks/useConcatSearchParams';
import { FIRST_PAGE } from '../../consts/app-route';
import * as C from './components';

type SelectProps = {
    options: string[];
    type: string;
};

const Select = ({ options, type }: SelectProps) => {
    const [searchParams, setSeachParams] = useSearchParams();
    const { allSearchParams } = useConcatSearchParams(searchParams);

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectValue, setSelectValue] = useState<string>(allSearchParams[type] ? allSearchParams[type] : '');

    const selectClickHandler = () => {
        setIsOpen((prev) => !prev);
    };

    const buttonCloseClickHandler = (evt: MouseEvent<HTMLButtonElement>) => {
        evt.stopPropagation();
        setSelectValue('');
        delete allSearchParams[type];
        delete allSearchParams['page'];
        setSeachParams({...allSearchParams});
    };

    const refElement = useOutsideClick(() => {
        setIsOpen(false);
    });

    const optionClickHandler = (value: string) => {
        if (value === selectValue) {
            return;
        }

        setSeachParams({...allSearchParams,
            [type]: value,
            'page': String(FIRST_PAGE)
        });

        setSelectValue(value);
        setIsOpen(false);
    };

    return (
        <C.Select ref={refElement} isOpen={isOpen}>
            <C.SelectPlaceholderWrapper onClick={selectClickHandler}>
                {!selectValue && <C.SelectPlaceholder>Select {type}</C.SelectPlaceholder>}
                {selectValue && <C.SelectValue>{selectValue}</C.SelectValue>}
                <C.SelectControls>
                    <C.SelectIcon isOpen={isOpen}>
                        <FiChevronDown size={30} />
                    </C.SelectIcon>
                    {selectValue &&
                        <C.SelectIcon onClick={buttonCloseClickHandler}>
                            <FiX size={30} />
                        </C.SelectIcon>
                    }
                </C.SelectControls>
            </C.SelectPlaceholderWrapper>
            {isOpen &&
                <AnimatePresence>
                    <C.SelectDropdawn
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {options.map((option) => (
                            <C.SelectOption
                                key={option}
                                onClick={() => optionClickHandler(option)}
                                isSelect={selectValue === option}
                            >
                                {option}
                            </C.SelectOption>
                        ))}
                    </C.SelectDropdawn>
                </AnimatePresence>
            }
        </C.Select>
    );
};

export default Select;
