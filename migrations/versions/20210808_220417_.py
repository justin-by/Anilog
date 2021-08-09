"""empty message

Revision ID: a80145be831d
Revises: 0bc6d75f6e10
Create Date: 2021-08-08 22:04:17.375427

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a80145be831d'
down_revision = '0bc6d75f6e10'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('anime', sa.Column('genres', sa.String(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('anime', 'genres')
    # ### end Alembic commands ###