/* Replace with your SQL commands */

CREATE TABLE orders(

    id serial primary key,
    quantity decimal(9),
    id_product integer,
    id_user integer,
    foreign key(id_product) references products(id),
    foreign  key(id_user) references users(id)
);