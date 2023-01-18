-- Main table to store plans
CREATE TABLE plans (
    id          serial not null primary key,
    ref         VARCHAR(16) NOT NULL,
    plantext    TEXT NOT NULL,
    created_at  timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT  unique_index_ref UNIQUE (ref)
);
