import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import flower from '../../assets/images/flower.jpg';
import flower_1 from '../../assets/images/flower_1.jpg';
import flower_2 from '../../assets/images/flower_2.jpg';
import flower_3 from '../../assets/images/flower_3.jpg';
import flower_4 from '../../assets/images/flower_4.jpg';
import "./table.scss";


const List = () => {

 const rows = [
  {
    id: 1143155,
    img: flower,
    product: "Acer Nitro 5",
    customer: "Johon Smith",
    date: "1 March",
    amount: 785,
    methode: "Cass on Delivery",
    status: "Aproved",
  },
  {
    id: 2243155,
    img: flower_1,
    product: "Playstation 5",
    customer: "Michel Done",
    date: "1 March",
    amount: 900,
    methode: "Online Payment",
    status: "Pending",
  },
  {
    id: 3343155,
    img: flower_2,
    product: "Bangladesh ",
    customer: "Smith",
    date: "1 March",
    amount: 585,
    methode: "Cass on Delivery",
    status: "Aproved",
  },
  {
    id: 4243155,
    img: flower_3,
    product: "Nitro 5",
    customer: "Johon",
    date: "3 March",
    amount: 885,
    methode: "Online Payment",
    status: "Pending",
  }, 
  {
    id: 4153155,
    img: flower_4,
    product: "Nitro 5",
    customer: "Johon",
    date: "3 March",
    amount: 1000,
    methode: "Online Payment",
    status: "Aproved",
  }, 
];

  return (
   <TableContainer component={Paper} className='table'>
   <Table sx={{ minWidth: 650 }} aria-label="simple table">
     <TableHead>
       <TableRow>
         <TableCell className='tablecell'> Tracking ID</TableCell>
         <TableCell className='tablecell'> Product</TableCell>
         <TableCell className='tablecell'> Customer</TableCell>
         <TableCell className='tablecell'> Date</TableCell>
         <TableCell className='tablecell'> Amount</TableCell>
         <TableCell className='tablecell'> Payment Method</TableCell>
         <TableCell className='tablecell'> Status</TableCell>
       </TableRow>
     </TableHead>
     <TableBody>
       {rows.map((row) => (
         <TableRow
           key={row.id}>
           <TableCell>{row.id}</TableCell>
           <TableCell className='tablecell'>
            <div className="cellWrapper">
              <img src={row.img} alt="" className='image' />
              {row.product}
            </div>
           </TableCell>
           <TableCell className='tablecell'>{row.customer}</TableCell>
           <TableCell className='tablecell'>{row.date}</TableCell>
           <TableCell className='tablecell'>{row.amount}</TableCell>
           <TableCell className='tablecell'>{row.methode}</TableCell>
           <TableCell className='tablecell'>{row.status}</TableCell>
         </TableRow>
       ))}
     </TableBody>
   </Table>
 </TableContainer>
  )
}

export default List