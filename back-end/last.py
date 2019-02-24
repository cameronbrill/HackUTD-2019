import dash
import dash_core_components as dcc
import dash_html_components as html
import pandas as pd
import plotly.graph_objs as go
from sklearn import datasets, linear_model


external_stylesheets = ['https://codepen.io/chriddyp/pen/bWLwgP.css']

app = dash.Dash(__name__, external_stylesheets=external_stylesheets)

df = pd.read_csv('legit.csv')


app.layout = html.Div([
    dcc.Graph(
        id='fico-vs-index',
        figure={
            'data': [
                go.Scatter(
                    x=df[df['zip'] == i]['fico'],
                    y=df[df['zip'] == i]['index'],
                    text=df[df['zip'] == i]['name'],
                    mode='markers',
                    opacity=0.7,
                    marker={
                        'size': 15,
                        'line': {'width': 0.5, 'color': 'white'}
                    },
                    name=i
                ) for i in df.zip.unique()
            ],
            'layout': go.Layout(
                xaxis={'type': 'log', 'title': 'FICO Score'},
                yaxis={'title': 'Risk Index'},
                margin={'l': 40, 'b': 40, 't': 10, 'r': 10},
                legend={'x': 0, 'y': 1},
                hovermode='closest'
            )
        }
    )
])

if __name__ == '__main__':
    app.run_server(debug=True)