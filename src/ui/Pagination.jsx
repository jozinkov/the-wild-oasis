import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

import { RESULTS_PER_PAGE } from "../utils/constants";

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const PaginationButton = styled.button`
  background-color: ${(props) =>
    props.$active ? " var(--color-brand-600)" : "var(--color-grey-50)"};
  color: ${(props) => (props.$active ? " var(--color-brand-50)" : "inherit")};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

Pagination.propTypes = {
  count: PropTypes.number,
};

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  if (count <= RESULTS_PER_PAGE) return null;

  const numOfPages = Math.ceil(count / RESULTS_PER_PAGE);
  const from = (currentPage - 1) * RESULTS_PER_PAGE + 1;
  const to = currentPage < numOfPages ? currentPage * RESULTS_PER_PAGE : count;

  function onNextPage() {
    if (currentPage < numOfPages) {
      searchParams.set("page", currentPage + 1);
      setSearchParams(searchParams);
    }
  }
  function onPrevPage() {
    if (currentPage > 1) {
      searchParams.set("page", currentPage - 1);
      setSearchParams(searchParams);
    }
  }

  return (
    <StyledPagination>
      <P>
        Showing <span>{from}</span> to <span>{to}</span> results out of{" "}
        <span>{count}</span>
      </P>

      <Buttons>
        <PaginationButton onClick={onPrevPage} disabled={currentPage === 1}>
          <HiChevronLeft /> Previous
        </PaginationButton>

        <PaginationButton
          onClick={onNextPage}
          disabled={currentPage === numOfPages}
        >
          Next <HiChevronRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
}

export default Pagination;
