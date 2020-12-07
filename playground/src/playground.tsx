import {useState, useCallback} from 'react';
import {jsx, useTheme} from '@emotion/react';
import {Button, Input} from '@emotion-starter/react';
import {Badge, DropdownMenu, ComboBox, Popover, Box} from '@emotion-kit/react';

export function Playground() {
  const theme = useTheme();

  const mode = window.localStorage.getItem('mode') || 'light';

  const setMode = useCallback((mode: string) => {
    window.localStorage.setItem('mode', mode);
  }, []);

  const [country, setCountry] = useState('');

  const sectionStyle = {marginTop: 0};

  return (
    <div style={{maxWidth: '700px', margin: '40px auto'}}>
      <h2>Emotion Kit Playground</h2>

      <div css={{marginBottom: '3rem'}}>
        <a
          href="/"
          onClick={() => {
            setMode('light');
          }}
          css={
            mode === 'light'
              ? {color: theme.colors.text.normal, fontWeight: theme.fontWeights.bold}
              : undefined
          }
        >
          Light mode
        </a>
        <span css={{padding: '0 .75rem', color: theme.colors.border.normal}}>|</span>
        <a
          href="/"
          onClick={() => {
            setMode('dark');
          }}
          css={
            mode === 'dark'
              ? {color: theme.colors.text.normal, fontWeight: theme.fontWeights.bold}
              : undefined
          }
        >
          Dark mode
        </a>
      </div>

      <h3 css={sectionStyle}>Badge</h3>

      <h4>Regular</h4>

      <div css={{display: 'flex'}}>
        <div css={{marginRight: '.5rem'}}>
          <Badge>Neutral</Badge>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Badge color="primary">Primary</Badge>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Badge color="secondary">Secondary</Badge>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Badge color="positive">Positive</Badge>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Badge color="negative">Negative</Badge>
        </div>
      </div>

      <h4>Outline</h4>

      <div css={{display: 'flex'}}>
        <div css={{marginRight: '.5rem'}}>
          <Badge variant="outline">Neutral</Badge>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Badge color="primary" variant="outline">
            Primary
          </Badge>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Badge color="secondary" variant="outline">
            Secondary
          </Badge>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Badge color="positive" variant="outline">
            Positive
          </Badge>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Badge color="negative" variant="outline">
            Negative
          </Badge>
        </div>
      </div>

      <hr />

      <h3 css={sectionStyle}>DropdownMenu</h3>

      <DropdownMenu
        items={[
          {
            label: 'Edit',
            onClick: () => {
              alert('"Edit" clicked!');
            }
          },
          {label: 'Duplicate'},
          {
            label: 'Remove',
            disabled: true
          },
          {type: 'divider'},
          {label: () => <strong>Preview</strong>}
        ]}
      >
        {({open}) => (
          <Button onClick={open} color="primary">
            Open
          </Button>
        )}
      </DropdownMenu>

      <hr />

      <h3 css={sectionStyle}>ComboBox</h3>

      <div css={{display: 'flex', alignItems: 'center'}}>
        <ComboBox
          items={countries}
          initialValue={country}
          onValueChange={(value) => {
            setCountry(value);
          }}
          placeholder="Japan"
        />
        <div css={{marginLeft: '1rem', color: theme.colors.text.muted}}>{country}</div>
      </div>

      <hr />

      <h3 css={sectionStyle}>Popover</h3>

      <Popover
        alignment="left" // 'left' | 'right'
        position="bottom" // 'bottom' | 'top' | 'cursor'
        content={
          <Box
            css={{
              width: 200,
              height: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: theme.colors.background.highlighted
            }}
          >
            Content
          </Box>
        }
      >
        {({open}) => (
          <Button onClick={open} color="primary">
            Open
          </Button>
        )}
      </Popover>
    </div>
  );
}

const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Bouvet Island',
  'Brazil',
  'British Indian Ocean Territory',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Cayman Islands',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'Cocos (Keeling) Islands',
  'Colombia',
  'Comoros',
  'Congo',
  'The Democratic Republic of Congo',
  'Cook Islands',
  'Costa Rica',
  'Ivory Coast',
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor',
  'Ecuador',
  'Egypt',
  'England',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Falkland Islands',
  'Faroe Islands',
  'Fiji Islands',
  'Finland',
  'France',
  'French Guiana',
  'French Polynesia',
  'French Southern territories',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Heard Island and McDonald Islands',
  'Holy See (Vatican City State)',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Isle of Man',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libyan Arab Jamahiriya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macao',
  'North Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Micronesia, Federated States of',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montserrat',
  'Montenegro',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'Netherlands Antilles',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Niue',
  'Norfolk Island',
  'North Korea',
  'Northern Ireland',
  'Northern Mariana Islands',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Pitcairn',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Reunion',
  'Romania',
  'Russian Federation',
  'Rwanda',
  'Saint Helena',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Pierre and Miquelon',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Scotland',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Georgia and the South Sandwich Islands',
  'South Korea',
  'South Sudan',
  'Spain',
  'SriLanka',
  'Sudan',
  'Suriname',
  'Svalbard and Jan Mayen',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tokelau',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks and Caicos Islands',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'United States Minor Outlying Islands',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Venezuela',
  'Vietnam',
  'Virgin Islands, British',
  'Virgin Islands, U.S.',
  'Wales',
  'Wallis and Futuna',
  'Western Sahara',
  'Yemen',
  'Zambia',
  'Zimbabwe'
];
