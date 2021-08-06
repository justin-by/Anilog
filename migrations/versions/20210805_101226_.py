"""empty message

Revision ID: d99bfc05627d
Revises: f487e41e886d
Create Date: 2021-08-05 10:12:26.873559

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd99bfc05627d'
down_revision = 'f487e41e886d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('table_anime', 'rating',
               existing_type=sa.INTEGER(),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('table_anime', 'rating',
               existing_type=sa.INTEGER(),
               nullable=False)
    # ### end Alembic commands ###