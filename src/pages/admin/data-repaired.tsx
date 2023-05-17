import AdminLayout from "layouts/admin"
import { Box, SimpleGrid } from "@chakra-ui/react"
import DevelopmentTable from "views/admin/dataTables/components/DevelopmentTable"
import { columnsDataDevelopment } from "views/admin/dataTables/variables/columnsData"
import tableDataDevelopment from 'views/admin/dataTables/variables/tableDataDevelopment.json'
import { TableData } from 'views/admin/default/variables/columnsData'


const DataRepaired = () => {
  return (
    <AdminLayout>
      <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
        <SimpleGrid mb='20px'
          columns={{ sm: 1, md: 1, xl:1 }}
          spacing={{ base: '20px', xl: '20px' }}>
            <DevelopmentTable
            columnsData={columnsDataDevelopment}
            tableData={(tableDataDevelopment as unknown) as TableData[]}
          />

        </SimpleGrid>
      </Box>
    </AdminLayout>
  )
}

export default DataRepaired