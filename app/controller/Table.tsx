import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/react";
import { useEffect } from "react";
interface MyTableProps {
    voteCounts: {String:number}
}

const MyTable: React.FC<MyTableProps> = ({ voteCounts }) => {
   
    useEffect(()=>{
        console.log("super",voteCounts)
    },[voteCounts])
    return (
        <Table aria-label="Example static collection table">
            <TableHeader>
                <TableColumn>প্রার্থী</TableColumn>
                {/* <TableColumn>ROLE</TableColumn> */}
                <TableColumn>প্রাপ্ত ভোট</TableColumn>
            </TableHeader>
            <TableBody>
                {Object.entries(voteCounts).map(([key, value]) => {
                    console.log("duper",key,value)
                    return (
                    <TableRow key={key}>
                        <TableCell>{key}</TableCell>
                        <TableCell>{value}</TableCell>
                    </TableRow>
                )})}
            </TableBody>
        </Table>
    )
}
export default MyTable