import Typography from '@components/Typography';
import Button from '@components/Button';
import { HomeIcon } from 'lucide-react';
import IconButton from '@components/IconButton';
import { TextField } from '@components/Form';

function App() {
	return (
		<div className='h-screen bg-white dark:bg-dark'>
			<Typography>Teste</Typography>
			<Button disabled>Teste</Button>
			<Button color='error'>Teste</Button>
			<Button color='warning'>Teste</Button>
			<Button color='success'>Teste</Button>
			<Button color='secondary' startIcon={<HomeIcon />}>
				Teste
			</Button>
			<IconButton size='sm'>
				<HomeIcon />
			</IconButton>
			<IconButton size='md'>
				<HomeIcon />
			</IconButton>
			<IconButton size='lg'>
				<HomeIcon />
			</IconButton>
			<IconButton size='lg' variant='text'>
				<HomeIcon />
			</IconButton>
			<IconButton size='lg' variant='outlined'>
				<HomeIcon />
			</IconButton>
			<TextField label={'test'} placeholder={'dgsfdgs'} required />
			<TextField
				label={'test'}
				placeholder={'dgsfdgs'}
				required
				component='textarea'
			/>
			<TextField
				label={'test'}
				placeholder={'dgsfdgs'}
				required
				error={'Teste'}
			/>
			<TextField
				label={'test'}
				placeholder={'dgsfdgs'}
				required
				component='textarea'
				error={'Teste'}
			/>
			<TextField label={'test'} placeholder={'dgsfdgs'} required disabled />
			<TextField
				label={'test'}
				placeholder={'dgsfdgs'}
				required
				component='textarea'
				disabled
			/>
		</div>
	);
}

export default App;
