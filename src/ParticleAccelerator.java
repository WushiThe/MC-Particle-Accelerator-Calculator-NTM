import java.util.Scanner;

public class ParticleAccelerator {
    /**
     * @param args
     */
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int coilConsumption = 0;
        int acceleratorLength = 0;
        int roundCorners = 0;
        int desiredPower = 0;
        int coilStrength1 = 0;

        System.out.print("Find power, Find size. (1, 0): ");
        int powerMaterial = scanner.nextInt();

        if (powerMaterial == 0) {
            System.out.print("How long is the particle accelerator? ");
            acceleratorLength = scanner.nextInt();

            System.out.print("Strength of coil? ");
            coilStrength1 = scanner.nextInt();

            System.out.print("Round corners? (1, 0): ");
            roundCorners = scanner.nextInt();
        }

        if (powerMaterial == 1) {
            System.out.print("How strong should the accelerator be? ");
            desiredPower = scanner.nextInt();

            System.out.print("Strength of coil? ");
            coilStrength1 = scanner.nextInt();

            System.out.print("Round corners? (1, 0): ");
            roundCorners = scanner.nextInt();
        }

        if (powerMaterial == 0) {
            int acceleratorStrength = ((((acceleratorLength * 4) + 12) * 8) * coilStrength1);

            int coilAmount;
            if (roundCorners == 1) {
                coilAmount = (int) Math.ceil(((acceleratorLength * 8) * 4) + 84);
            } else {
                coilAmount = (int) Math.ceil(((acceleratorLength * 8) * 4) + 108 - 24);
            }

            int powerConsumption = (int) Math.ceil(coilAmount * coilConsumption * 0.01);

            System.out.println("The strength is " + acceleratorStrength);
            System.out.println("It needs " + coilAmount + " coils");
            System.out.println("It consumes " + powerConsumption + " MHe (Inaccurate)");
        }

        if (powerMaterial == 1) {

            int acceleratorLength2 = (int) Math.ceil((((desiredPower / coilStrength1) / 8)) / 4);

            int coilAmount;
            if (roundCorners == 1) {
                coilAmount = (int) (((acceleratorLength2 * 8) * 4) + 84 - 24);
            } else {
                coilAmount = (int) (((acceleratorLength2 * 8) * 4) + 108 - 24);
            }

            double powerConsumption = coilAmount * coilConsumption * 0.01;

            System.out.println("It is " + acceleratorLength2 + " blocks long");
            System.out.println("It needs " + coilAmount + " coils");
            System.out.println("It consumes " + powerConsumption + " MHe (Inaccurate)");
        }

        scanner.close();
    }
}
