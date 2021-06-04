import styled from "styled-components";
import { motion } from "framer-motion";

export const Button = styled(motion.button)`
  font-size: 1rem;
  padding: 10px 40px;
  margin-top: 1rem;
  margin-right: 1rem;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 30px;
  color: white;
  transform: scale(1);
  transition: all 0.3s ease;
  cursor: pointer;
  min-width: 150px;
  height: 53px;
  &:hover {
    border: 1px solid #fff;
    background-color: #fff;
    color: #000;
    transform: scale(1.03);
  }
  &:focus {
    outline-width: 0;
    transform: scale(0.8);
  }
  .btn-arrow {
    margin-right: 0.4rem;
  }
`;

export const CheckBtn = styled.button`
  font-size: 1rem;
  font-weight: 700;
  min-width: 150px;
  margin-right: 1rem;
  margin-bottom: 1rem;
  background-color: transparent;
  border: none;
  color: #fff;
  text-align: left;
  cursor: pointer;
  padding: 0.3rem;
  opacity: 1;
  &:focus {
    outline: none;
  }
  span {
    font-weight: 200;
  }
`;

export const QuestionTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 28px;
  font-weight: 900;
  &:focus {
    outline: none;
  }
  @media (max-width: 500px) {
    font-size: 1.6rem;
  }
`;
