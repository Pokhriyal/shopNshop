/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import {
  Container,
  Typography,
  Grid,
  FormGroup,
  Box,
  FormControlLabel,
  Checkbox,
  Stack,
  Divider,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Chip,
  AvatarGroup,
  Avatar,
} from '@mui/material';

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(id, desc, qty, unit) {
  const price = priceRow(qty, unit);
  return {
    id,
    desc,
    qty,
    unit,
    price,
  };
}

const TAX_RATE = 0.07;

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  ['Paperclips (Box)', 100, 1.15],
  ['Paper (Case)', 10, 45.99],
  ['Waste Basket', 2, 17.99],
].map((row, id) => createRow(id, ...row));

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function AddCart() {
  return (
    <Container sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid xs={6} md={7}>
          <Stack elevation={0} direction="row" justifyContent="space-between">
            <Stack direction="row" alignItems="center">
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} />
              </FormGroup>
              <Typography variant="body2">1/1 ITEMS SELECTED</Typography>
            </Stack>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <Button
                size="small"
                variant="caption"
                sx={{ textTransform: 'capitalize' }}
              >
                Remove
              </Button>
              <Button
                size="small"
                variant="caption"
                sx={{ textTransform: 'capitalize' }}
              >
                Move to Wishlist
              </Button>
            </Stack>
          </Stack>
          <Box
            elevation={1}
            mt={3}
            sx={{
              border: 1,
              borderColor: '#e0e0e0',
              padding: 2,
              borderRadius: 1,
            }}
          >
            <Stack direction="row" spacing={4}>
              <Grid>
                <Typography variant="h6">Dummy Image</Typography>
              </Grid>
              <Grid>
                <Typography variant="h6">Mast & Harbour</Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet.
                </Typography>
                <Typography variant="caption">
                  Sold by: Truecom Retail
                </Typography>
                <Box mt={3}>
                  <p>
                    Rs. 1,497
                    <del style={{ margin: '0px 6px' }}>Rs. 5999</del>
                    <label htmlFor="" style={{ color: 'red' }}>
                      75% OFF
                    </label>
                  </p>
                </Box>
              </Grid>
            </Stack>
          </Box>
          <Box
            elevation={1}
            mt={3}
            sx={{
              border: 1,
              borderColor: '#e0e0e0',
              padding: 2,
              borderRadius: 1,
              flexGrow: 1,
            }}
          >
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={9}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <AvatarGroup max={4}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="/static/images/avatar/2.jpg"
                    />
                  </AvatarGroup>
                  <Typography variant="subtitle1" component="p">
                    Support transformative social work in India
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="button"
                  component="button"
                  sx={{ color: '#ff3f6c', fontWeight: '600' }}
                >
                  Login Now
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid md={1} />
        <Grid xs={6} md={4}>
          <Typography
            variant="button"
            component="p"
            sx={{ color: '#ff3f6c', fontWeight: '600' }}
          >
            Support transformative social work in India
          </Typography>
          <Stack direction="row" alignItems="center" mt={2} mb={2}>
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} />
            </FormGroup>
            <Typography variant="button" xs={{ fontWeight: '600' }}>
              Support
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2} mt={2} mb={2}>
            <Chip label="10" variant="outlined" />
            <Chip label="20" variant="outlined" />
            <Chip label="50" variant="outlined" />
            <Chip label="100" variant="outlined" />
            <Chip label="Other" variant="outlined" />
          </Stack>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Desc</TableCell>
                  <TableCell align="right">Qty.</TableCell>
                  <TableCell align="right">@</TableCell>
                  <TableCell align="right">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.desc}</TableCell>
                    <TableCell align="right">{row.qty}</TableCell>
                    <TableCell align="right">{row.unit}</TableCell>
                    <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell rowSpan={3} />
                  <TableCell colSpan={2}>Subtotal</TableCell>
                  <TableCell align="right">
                    {ccyFormat(invoiceSubtotal)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Tax</TableCell>
                  <TableCell align="right">
                    {`${(TAX_RATE * 100).toFixed(0)} %`}
                  </TableCell>
                  <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>Total</TableCell>
                  <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
          <Box mt={2}>
            <Button variant="contained" fullWidth>
              Place Order
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
