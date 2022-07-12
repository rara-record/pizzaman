import Helmet from '../components/Helmet'
import CommonSection from '../components/UI/CommonSection'

import products from '../assets/fake-data/products'
import ProductCard from '../components/UI/ProductCard'

import { useState } from 'react'
import { Container, Col, Row } from 'reactstrap'

import ReactPaginate from 'react-paginate'

const AllFoods = () => {
  const [searchValue, setSearchValue] = useState('')
  const [pageNumber, setPageNumber] = useState(0)

  const searchedProduct = products.filter((item) => {
    if (searchValue === '') return item
    if (
      item.title
        .toLocaleLowerCase() //
        .includes(searchValue.toLowerCase())
    ) {
      return item
    } else {
      return console.log('not found')
    }
  })

  const productPerPage = 8 // 아이템 표시 갯수
  const visitedPage = pageNumber * productPerPage
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  )

  const pageCount = Math.ceil(searchedProduct.length / productPerPage)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <Helmet title="All-Foods">
      <CommonSection title="All Foods" />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between">
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="I'm looking for...."
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50">
                  <option>Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {displayPage.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}

            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={'Prev'}
                nextLabel={'Next'}
                containerClassName={'paginationBtns'}
                activeClassName={'paginateActive'}
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default AllFoods
