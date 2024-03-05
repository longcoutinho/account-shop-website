import {Box, Button} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@/constants/FnCommon"
import React, {useEffect, useState} from "react";
import {getItemById} from "@/services/item";
import {Backend, HTTP_STATUS, PAGE_TITLE} from "@/constants";
import Page from "@/layouts";
import {useRouter} from "next/router";
import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';
import {
    Unstable_NumberInput as BaseNumberInput,
    NumberInputProps,
} from '@mui/base/Unstable_NumberInput';
import {styled} from "@mui/material/styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";
import BuyItemComponent from "@/components/buy/BuyItemComponent";

function AddIcon(props: { fontSize: string }) {
    return <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>;
}

function RemoveIcon(props: { fontSize: string }) {
    return <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>;
}

export default function DetailItem(props: any) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [amount, setAmount] = useState<number | null>(1);
    const [listImageIds, setListImageIds] = useState<string[]>([]);
    const [openBuyComponent, setOpenBuyComponent] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (router.query.id !== undefined) {
            renderListItem();
        }
    }, [router.query.id])

    const closeBuyComponent = () => {
        setOpenBuyComponent(false);
    }

    const renderListItem = () => {
        getItemById(router.query.id).then(
            (res) => {
                if (res.status == HTTP_STATUS.OK) {
                    setName(res.data.name);
                    setPrice(res.data.price);
                    setListImageIds(res.data.listImageIds);
                }
            }).catch((err) => {
            console.log(err);
        });
    }

    const NumberInput = React.forwardRef(function CustomNumberInput(
        props: NumberInputProps,
        ref: React.ForwardedRef<HTMLDivElement>,
    ) {
        return (
            <BaseNumberInput
                slots={{
                    root: StyledInputRoot,
                    input: StyledInput,
                    incrementButton: StyledButton,
                    decrementButton: StyledButton,
                }}
                slotProps={{
                    incrementButton: {
                        children: <AddIcon fontSize="small" />,
                        className: 'increment',
                    },
                    decrementButton: {
                        children: <RemoveIcon fontSize="small" />,
                    },
                }}
                {...props}
                ref={ref}
            />
        );
    });


    const blue = {
        100: '#daecff',
        200: '#b6daff',
        300: '#66b2ff',
        400: '#3399ff',
        500: '#007fff',
        600: '#0072e5',
        700: '#0059B2',
        800: '#004c99',
    };

    const grey = {
        50: '#F3F6F9',
        100: '#E5EAF2',
        200: '#DAE2ED',
        300: '#C7D0DD',
        400: '#B0B8C4',
        500: '#9DA8B7',
        600: '#6B7A90',
        700: '#434D5B',
        800: '#303740',
        900: '#1C2025',
    };

    const StyledInputRoot = styled('div')(
        ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 400;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[500]};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`,
    );

    const StyledInput = styled('input')(
        ({ theme }) => `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.375;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 4px ${
            theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
        };
  border-radius: 8px;
  margin: 0 8px;
  padding: 10px 12px;
  outline: 0;
  min-width: 0;
  width: 4rem;
  text-align: center;

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[700] : blue[200]};
  }

  &:focus-visible {
    outline: 0;
  }
`,
    );

    const StyledButton = styled('button')(
        ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  line-height: 1.5;
  border: 1px solid;
  border-radius: 999px;
  border-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
  width: 32px;
  height: 32px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    cursor: pointer;
    background: ${theme.palette.mode === 'dark' ? blue[700] : blue[500]};
    border-color: ${theme.palette.mode === 'dark' ? blue[500] : blue[400]};
    color: ${grey[50]};
  }

  &:focus-visible {
    outline: 0;
  }

  &.increment {
    order: 1;
  }
  `);

    
    return (
        <Page title={PAGE_TITLE.ALL_PRODUCTS} menuIndex={1}>
            <Box className="flex flex-row justify-center items-center">
                <Box className="w-1/2 flex flex-row gap-5 flex-wrap justify-items-center bg-white rounded-2xl box-shadow p-5">
                    <Box className="w-full min-w-40 flex flex-row items-center rounded-sm">
                        <Box className="w-1/3 h-full">
                            <img className="h-52 object-cover" src={Backend.IMAGE_SERVICE + '/' + (listImageIds.length !== 0 ? listImageIds[0].toString() : '')}/>
                        </Box>
                        <Box className="w-2/3 h-full p-2 flex flex-col items-center justify-between">
                            <p className="text-blue-500 font-bold text-center text-3xl">{name}</p>
                            <NumberInput defaultValue={1} value={amount} min={1} aria-label="Quantity Input"
                                         onChange={(event, newValue) => setAmount(newValue)}
                            />
                            <p className="text-black text-center text-bold mt-2">Đơn giá: {amount * price} đ</p>
                            <Button variant="outlined" className="w-1/2 mt-2"
                                    onClick = {() => setOpenBuyComponent(true)}
                            >Mua </Button>
                        </Box>
                    </Box>
                </Box>
                <BuyItemComponent open={openBuyComponent} name={name} amount={amount} price={amount * price} closeBuyComponent={closeBuyComponent}></BuyItemComponent>
            </Box>
        </Page>
    );
}

