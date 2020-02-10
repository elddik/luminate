/** @jsx jsx */
import {jsx, Flex, Box, Heading, Button, Card} from 'theme-ui'
import {useListCountriesTableQuery} from '../../graphql'
import {Link, RouteComponentProps} from 'react-router-dom'
import {Country, Tooltip} from '@luminate/gatsby-theme-luminate/src'
import {formatDistanceToNow, format} from 'date-fns'

interface Props extends RouteComponentProps {}

const ListCountriesView = ({match, history}: Props) => {
  const {url} = match
  const {data, error, loading} = useListCountriesTableQuery()

  if (loading) {
    return <div>Loading...</div>
  }
  if (error || !data) {
    return <div>Error!</div>
  }

  return (
    <Flex sx={{flexDirection: 'column'}}>
      <Flex sx={{alignItems: 'center', justifyContent: 'space-between', px: 4, mb: 4}}>
        <Box>
          <Heading as="h1">Country</Heading>
        </Box>
        <Box>
          <Button as="a" onClick={() => history.push(`${url}/create`)}>
            Create New
          </Button>
        </Box>
      </Flex>
      <Card>
        {data.listCountries.edges.map(({node}, index) => {
          return (
            <div key={node?.id}>
              <Link to={`${url}/${node?.id}`} sx={{textDecoration: 'none', color: 'inherit'}}>
                <CountryRow country={node} index={index} />
              </Link>
            </div>
          )
        })}
      </Card>
    </Flex>
  )
}

interface CountryRowProps {
  country: Country
  index: number
}
const CountryRow = ({country, index}: CountryRowProps) => {
  return (
    <Flex sx={{py: 3, px: 4, bg: index % 2 == 0 ? 'inherit' : 'greys.0', alignItems: 'center'}}>
      <Box sx={{flex: 3}}>{country.name}</Box>
      <Box sx={{flex: 1}}>
        <Tooltip text={format(parseInt(country.createdAt), 'EE, LLL do, yyyy')}>
          <span>{formatDistanceToNow(parseInt(country.createdAt), {addSuffix: true})}</span>
        </Tooltip>
      </Box>
      <Box sx={{flex: 1}}>
        <Tooltip text={format(parseInt(country.updatedAt), 'EE, LLL do, yyyy')}>
          <span>{formatDistanceToNow(parseInt(country.updatedAt), {addSuffix: true})}</span>
        </Tooltip>
      </Box>
    </Flex>
  )
}

export default ListCountriesView
