--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Homebrew)
-- Dumped by pg_dump version 14.5 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: company_cin_list; Type: TABLE; Schema: public; Owner: ankushbhardwaj
--

CREATE TABLE public.company_cin_list (
    id integer NOT NULL,
    companyname character varying(150),
    cin character varying(150)
);


ALTER TABLE public.company_cin_list OWNER TO ankushbhardwaj;

--
-- Name: company_cin_list_id_seq; Type: SEQUENCE; Schema: public; Owner: ankushbhardwaj
--

CREATE SEQUENCE public.company_cin_list_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.company_cin_list_id_seq OWNER TO ankushbhardwaj;

--
-- Name: company_cin_list_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ankushbhardwaj
--

ALTER SEQUENCE public.company_cin_list_id_seq OWNED BY public.company_cin_list.id;


--
-- Name: company_cin_list id; Type: DEFAULT; Schema: public; Owner: ankushbhardwaj
--

ALTER TABLE ONLY public.company_cin_list ALTER COLUMN id SET DEFAULT nextval('public.company_cin_list_id_seq'::regclass);


--
-- Name: company_cin_list company_cin_list_pkey; Type: CONSTRAINT; Schema: public; Owner: ankushbhardwaj
--

ALTER TABLE ONLY public.company_cin_list
    ADD CONSTRAINT company_cin_list_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

