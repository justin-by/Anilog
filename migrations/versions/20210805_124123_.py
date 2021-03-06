"""empty message

Revision ID: bedb7cb7eabe
Revises: d99bfc05627d
Create Date: 2021-08-05 12:41:23.967413

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'bedb7cb7eabe'
down_revision = 'd99bfc05627d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('table_anime')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('table_anime',
    sa.Column('status', sa.VARCHAR(length=20), autoincrement=False, nullable=False),
    sa.Column('rating', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('userId', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('animeId', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['animeId'], ['anime.id'], name='table_anime_animeId_fkey'),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], name='table_anime_userId_fkey')
    )
    # ### end Alembic commands ###
