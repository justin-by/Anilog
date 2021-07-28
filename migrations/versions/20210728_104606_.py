"""empty message

Revision ID: 630075e5829e
Revises: c6e61435f891
Create Date: 2021-07-28 10:46:06.338425

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '630075e5829e'
down_revision = 'c6e61435f891'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('anime', 'title',
               existing_type=sa.VARCHAR(),
               nullable=True)
    op.alter_column('anime', 'japTitle',
               existing_type=sa.VARCHAR(),
               nullable=True)
    op.alter_column('anime', 'status',
               existing_type=sa.VARCHAR(),
               nullable=True)
    op.alter_column('anime', 'desc',
               existing_type=sa.VARCHAR(),
               nullable=True)
    op.alter_column('anime', 'trailer',
               existing_type=sa.VARCHAR(),
               nullable=True)
    op.alter_column('anime', 'bannerPic',
               existing_type=sa.VARCHAR(),
               nullable=True)
    op.alter_column('anime', 'season',
               existing_type=sa.VARCHAR(),
               nullable=True)
    op.alter_column('anime', 'year',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.alter_column('anime', 'episodes',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.alter_column('anime', 'popularity',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.alter_column('anime', 'ranking',
               existing_type=sa.INTEGER(),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('anime', 'ranking',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.alter_column('anime', 'popularity',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.alter_column('anime', 'episodes',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.alter_column('anime', 'year',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.alter_column('anime', 'season',
               existing_type=sa.VARCHAR(),
               nullable=False)
    op.alter_column('anime', 'bannerPic',
               existing_type=sa.VARCHAR(),
               nullable=False)
    op.alter_column('anime', 'trailer',
               existing_type=sa.VARCHAR(),
               nullable=False)
    op.alter_column('anime', 'desc',
               existing_type=sa.VARCHAR(),
               nullable=False)
    op.alter_column('anime', 'status',
               existing_type=sa.VARCHAR(),
               nullable=False)
    op.alter_column('anime', 'japTitle',
               existing_type=sa.VARCHAR(),
               nullable=False)
    op.alter_column('anime', 'title',
               existing_type=sa.VARCHAR(),
               nullable=False)
    # ### end Alembic commands ###
