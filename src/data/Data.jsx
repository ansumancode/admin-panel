import { AiFillPieChart } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { ImUsers } from 'react-icons/im'


 const CardData = [
    {
        logoIcon: <AiFillPieChart />,
        title: "Revenue",
        amount: "$21,458",
        ratio: "+2.9%"

    },
    {
        logoIcon: <BsFillBagCheckFill />,
        title: "Order",
        amount: "5,663",
        ratio: "+2.9%"

    },
    {
        logoIcon: <ImUsers />,
        title: "Customer",
        amount: "45,254",
        ratio: "-2.9%"

    }
]

  const ProductSheetData = [
    {
        id: "01",
        title: "Product one",
        amount: "$ 2,235",
        volum: "5,231"

    },
    {
        id: "02",
        title: "Product two",
        amount: "$ 2,785",
        volum: "2,231"

    },

    {
        id: "03",
        title: "Product three",
        amount: "$ 1,885",
        volum: "7,231"

    },
    {
        id: "04",
        title: "Product four",
        amount: "$ 1,345",
        volum: "8,231"

    },
    {
        id: "05",
        title: "Product five",
        amount: "$ 3,885",
        volum: "1,231"

    }

]

const ProfileDataCalender=[
    {
        date: "12",
        month: "Sep",
        des: "Lorem ipsum dolor sit amet consectetur"
    },
    {
        date: "14",
        month: "Oct",
        des: "Lorem ipsum dolor sit amet consectetur"
    },
    {
        date: "21",
        month: "Nov",
        des: "Lorem ipsum dolor sit amet consectetur"
    },
    {
        date: "02",
        month: "Dec",
        des: "Lorem ipsum dolor sit amet consectetur"
    },
    {
        date: "15",
        month: "Jan",
        des: "Lorem ipsum dolor sit amet consectetur"
    }
]

export  {CardData, ProductSheetData, ProfileDataCalender};