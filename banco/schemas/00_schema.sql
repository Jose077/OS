-- object: public.cliente | type: TABLE --
-- DROP TABLE IF EXISTS public.cliente CASCADE;
CREATE TABLE public.cliente (
	id serial NOT NULL,
	nome character varying(250),
	CONSTRAINT pk_cliente PRIMARY KEY (id)

);
-- ddl-end --

-- object: public.produto | type: TABLE --
-- DROP TABLE IF EXISTS public.produto CASCADE;
CREATE TABLE public.produto (
	id serial NOT NULL,
	nome character varying(250),
	preco decimal(5,2) NOT NULL,
	CONSTRAINT pk_produto PRIMARY KEY (id)

);
-- ddl-end --

-- object: public.pedido | type: TABLE --
-- DROP TABLE IF EXISTS public.pedido CASCADE;
CREATE TABLE public.pedido (
	id serial NOT NULL,
	data date NOT NULL,
	total decimal(7,2) NOT NULL,
	cliente_id integer NOT NULL,
	CONSTRAINT pk_pedido PRIMARY KEY (id)

);
-- ddl-end --

-- object: public.pedido_item | type: TABLE --
-- DROP TABLE IF EXISTS public.pedido_item CASCADE;
CREATE TABLE public.pedido_item (
	pedido_id integer NOT NULL,
	produto_id integer NOT NULL,
	desconto decimal(5,2) NOT NULL,
	qtd real NOT NULL,
	CONSTRAINT pk_pedido_item PRIMARY KEY (pedido_id,produto_id)

);
-- ddl-end --

-- object: fk_cliente | type: CONSTRAINT --
-- ALTER TABLE public.pedido DROP CONSTRAINT IF EXISTS fk_cliente CASCADE;
ALTER TABLE public.pedido ADD CONSTRAINT fk_cliente FOREIGN KEY (cliente_id)
REFERENCES public.cliente (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: fk_pditem_pedido | type: CONSTRAINT --
-- ALTER TABLE public.pedido_item DROP CONSTRAINT IF EXISTS fk_pditem_pedido CASCADE;
ALTER TABLE public.pedido_item ADD CONSTRAINT fk_pditem_pedido FOREIGN KEY (pedido_id)
REFERENCES public.pedido (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: fk_pditem_produto | type: CONSTRAINT --
-- ALTER TABLE public.pedido_item DROP CONSTRAINT IF EXISTS fk_pditem_produto CASCADE;
ALTER TABLE public.pedido_item ADD CONSTRAINT fk_pditem_produto FOREIGN KEY (produto_id)
REFERENCES public.produto (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --


